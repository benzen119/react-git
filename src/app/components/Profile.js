const React = require('react');
const ReactDOM = require('react-dom');

  const Profile = React.createClass({
    
        render: function(){
          let data = this.props.data;
          let url = this.props.data.homeUrl;
          return(
            <div className="container-fluid">
              <a href={url}><img className="avatar-img" src={data.avatar}/></a>
              <h1>{data.name}</h1>
              <p>{data.location}</p>
              <p>Repositories: {data.repos}</p>
              <p>Followers: {data.followers}</p>
              <p>Following: {data.following}</p>
              <p>{data.homeUrl}</p>
              <p>{data.notFound}</p>
            </div>
          );
        }
    
      });

      module.exports = Profile;