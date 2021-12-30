import React from "react";

const SearchBar = ({ searchState, setSearchState, whenSubmit }) => {
  const onInputChange = (event) => {
    setSearchState(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    whenSubmit(searchState); // Same as props.whenSubmit (but don't need props because I destructed the props)
    setSearchState("");
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit} value={searchState}>
        <div className="field">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            onChange={onInputChange}
            value={searchState}
          ></input>
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label htmlFor="">Image Search</label>
//             <input type="text"></input>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
