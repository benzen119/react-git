const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const SearchProfile = require('./components/SearchProfile');
const Profile = require('./components/Profile');

require('./css/style.css');

const API = 'https://api.github.com/users/';

const App = React.createClass({
    
    getInitialState: function() {
      return {
        login: 'benzen119',
        name:'',
        avatar:'',
        location:'',
        repos:'',
        followers: '',
        following:'',
        homeUrl:'',
        notFound:''
      }     
    },

    fetchProfile(username) { 
      let url = API + username;
      fetch(url)
        .then(function(res){
         return res.json();
        })
        .then((data) => {
          this.setState({
            login: data.login,
            name: data.name,
            avatar: data.avatar_url,
            location: data.location,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeUrl: data.html_url,
            notFound: data.message
          })
        }).then(function(){
            console.log("ok");
        })
        .catch((err) => console.log(err) )
    },

    componentDidMount: function(){
      this.fetchProfile(this.state.login);
    },

    render: function(){
      return(
          <div className="main-container">
            <SearchProfile fetchProfile={this.fetchProfile.bind(this)} />
            <Profile data={this.state} />
          </div>
      );
    }
    
  });
  
  ReactDOM.render(<App />, document.querySelector("#app"));
  