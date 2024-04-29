import React from 'react';
import CategoriesTable from './CategoriesTable.jsx';
import CreateCategory from './CreateCategory.jsx';

const MainCategories = () => {
    return (
        <section className='content-main'>
            <div className='content-header'>
                <h2 className='content-title'>Categories</h2>
            </div>
            
            <div className='card shadow-sm'>
                <div className='card-body'>
                    <div className='row'>
                        {/* Create Category */}
                        <CreateCategory />
                        {/* Categories table  */}
                        <CategoriesTable />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainCategories;