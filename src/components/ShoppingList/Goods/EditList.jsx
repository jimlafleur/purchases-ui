import React from "react";
import GoodsList from "./GoodsList";

const EditList = ({match}) => <GoodsList listId={match.params.id}/>

export default EditList
