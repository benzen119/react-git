const React = require('react');
const ReactDOM = require('react-dom');

const SearchProfile = React.createClass({
    
        fetchData: function(e){
          e.preventDefault();
          this.props.fetchProfile(this.refs.username.value);
        },
    
        render: function(){
          return(
            <div className="search-container">
              <div className="row">
                <div className="col-sm-4"></div>

                <div className="col-sm-4">
                  <form id="search-form" onSubmit={this.fetchData.bind(this)}>
                    <input className="form-control search-input" type="search" ref="username" placeholder="Type Username + Enter" />
                  </form>
                </div>

                <div className="col-sm-4"></div>
              </div>
            </div>
          );
        }
    
      });

      module.exports = SearchProfile;