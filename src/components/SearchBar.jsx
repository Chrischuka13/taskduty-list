import React, { useContext, useEffect, useState } from 'react'

const SearchBar = ({ query, setQuery, tag, setTag }) => {




  return (
    <div>
        <section>
            <input type="text" placeholder="Search tasks..." value={query} onChange={(e) => setQuery(e.target.value)}/>

            <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="">All</option>
                <option value="Important">Important</option>
                <option value="Urgent">Urgent</option>
            </select>

        </section>
    </div>
  )
}

export default SearchBar