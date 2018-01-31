//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
//import Update from './Update';
import Delete from './Delete';
import { Tab, Tabs } from 'react-bootstrap';
import YearTabsRouter from './tabs/yearTabsRouter';
//import MonthTabs from './tabs/monthTabs';
export default class App extends React.Component {
constructor() {
    super();
  this.state = {selectedYear: 2018, data: [], activeTab:2018};
    this.getData = this.getData.bind(this);
  }
componentWillReceiveProps(nextProps) {
    if(nextProps.history.location.search){
    var search = nextProps.history.location.search;
    search = search.substring(1);
    var searchObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    this.setState({activeTab: parseInt(searchObj.year)});
    this.setState({selectedYear: searchObj.year});
    //this.setState({selectedMonth: searchObj.month});
//this.getData(this, searchObj.year, searchObj.month);
this.getData(this, searchObj.year);
  }else{
      this.getData(this, 2018, 'All');
    }
  }
componentDidMount(){
    this.getData(this, 2018, 'All');
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab,
       selectedYear: selectedTab
     });
  }
getData(ev, year){
    axios.get('/getAll?year='+year)
      .then(function(response) {
        ev.setState({data: response.data});
        ev.setState({selectedYear: parseInt(year)});
       // ev.setState({selectedMonth: month});
      });
}
render() {
    return (
      <div>
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={2018} title={<YearTabsRouter year='2018'/>} />
          <Tab eventKey={2019} title={<YearTabsRouter year='2019'/>} />
        </Tabs>
        <Add selectedYear={this.state.selectedYear} />
        <table>
          <thead>
            <tr><th></th><th className='desc-col'>Customer Name</th><th className='button-col'>Email</th><th className='button-col'>Phone Number</th><th className='button-col'>Year</th><th className='button-col'>Delete</th></tr>
          </thead>
          <tbody>
            {
              this.state.data.map((exp) => {
                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.name}</td><td className='button-col'>{exp.email}</td><td className='button-col'>{exp.phone}</td><td className='button-col'>{exp.year}</td><td className='button-col'><Delete expense={exp} /></td></tr>
              })
            }
            </tbody>
</table>
      </div>
    );
  }
}
