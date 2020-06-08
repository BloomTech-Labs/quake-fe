import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { quakeFetch } from "../../actions";
import { useForm } from "../../customHooks/useForm";

function Sort(props) {

    const handleChanges = (e)=>{
        const sortBy=e.target.value;
        console.log(sortBy);
    }

    return (
        <div>
            <label for="sort">Sort by:</label>
            <form>
                <select name="sort" onChange={handleChanges}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="ascending magnitude">Ascending Magnitude</option>
                    <option value="descending magnitude">Descending Magnitude</option>
                </select>
            </form>
        </div>
    )
}

export default Sort;