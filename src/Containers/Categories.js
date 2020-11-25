import React from 'react';
import {connect} from 'react-redux';
import {getCategories,getActiveCategoryId} from '../selectors/Products';
import {Link,withRouter} from 'react-router';
import {compose} from 'redux';
import classNames from 'classnames';
import R from 'ramda';
import '../Containers/Layout.css';
import 'shards-ui/dist/css/shards.min.css';


 const Categories = (props)=>{
    const {categories,activeCategoryId} = props;
    // console.log(" activeCategoryId " , activeCategoryId);
    const renderCategory = (category,index)=>{
        const getActiveState = R.propEq('id',activeCategoryId);
        const linkClass = classNames({
            "list-group-item" : true,
            'active': getActiveState(category)
        });
        return(
            

             <Link
                 to={`/categories/${category.id}`}
                 className="btn btn-white btn-pill"
                 key={index}
                 
             >
                 {category.name}
             </Link> 
    
        );
    };

    const renderAllCategory = ()=>{
        const linkClass = classNames({
            "list-group-item" : true,
            active: R.isNil(activeCategoryId)
        });

        return (
            

<Link
                 to="/" 
                 className="btn btn-light  btn-pill"
                
                 
             >
                 All Products
             </Link> 
         
        );
    };

    return(
    
            <div>
                {renderAllCategory()}
                {
                    categories.map((category,index)=>{
                    // console.log(category);
                    return renderCategory(category,index);
                })
            }
            </div>
    
    );
};

const mapStateToProps = (state,ownProps)=>({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
});

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Categories);
// export default connect(mapStateToProps)(Categories);