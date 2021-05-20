import React from 'react'
import './Category.css';

function Category() {
    return (
        <div className="category mt-3">
            <div className="container">
                <header className="category__header">category</header>
                    <div class="input-group mb-1">
                        <input type="text" class="form-control catagory__search" placeholder="search" aria-label="search" aria-describedby="button-addon2" />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">category 1</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">category 2</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">category 3</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">category 4</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">category 5</label>
                    </div>
                    <a class="btn border-0 options__color" type="button" id="button-addon2">Show all categories</a>
                </div>
        </div>
    )
}

export default Category
