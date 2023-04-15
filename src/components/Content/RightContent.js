
import React, { Component } from 'react';		
//import ShowCard from './ShowCard/ShowCard';		
//import { getData } from './data.js';	
import Item from './Item';	
import data from '../Content/data';
class RightContent extends Component {		
render() {		
var dis_products=data("products"); //cac ap
var dis_categories =data("categories"); //cac danh muc
var items =[]; //cac component
for (var i=0;i<dis_products.length;i++){
    items[i]=<Item chiTiet ={dis_products[i].detail} tenSP={dis_products.name}/>
}

return (		
<div>		
<div id="right-content">		
<h2>Product : </h2>		
<div id="products">	
{items}	
{/* {		
products.map(product =>		
<ShowCard		
loai={product.loai}		
name={product.name}		
image={product.image}/>)		
}		 */}
<div style={{clear: 'both'}} />		
</div>		
<div style={{clear: 'both'}} />		
</div>		
<div style={{clear: 'both'}} />		
</div>		
);		
}		
}		
        
export default RightContent;		