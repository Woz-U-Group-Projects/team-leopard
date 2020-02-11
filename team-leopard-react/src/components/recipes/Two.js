import React from 'react';
import Header from '../Header.js';
import { Container } from 'react-bootstrap';


function Page() {
    return (
        <>
            <Container>
                <div className="card mb-3 text-center">
                    <h3 className="card-header">Baked Wings with Blue Cheese Parsley Dip</h3>
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">12</span></h6>
                    </div>
                    <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">Ingredients</h5>
                        <ul classNAme="list-group">
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">3 pounds</span>Chicken wing pieces</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>salt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>McCormick® Pure Ground Black Pepper</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/4 cup</span>Ketcup</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 tablespoons</span>White wine vinegar</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 tablespoons</span>Honey</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Garlic</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Chili pepper</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 cup</span>Non-fat Greek yogurt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/4 cup</span>Blue cheese crumbles</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Parsley</li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <h5 className="card-title">Preparation</h5>
                        <p className="card-text">
                        Preheat oven to 425°F. Mix ketchup, vinegar, honey, Garlic Paste and Chili Pepper Paste in small bowl. Remove half of the sauce to separate bowl for basting and reserving remaining sauce to serve. 
                        Set both aside. Season wings with salt and pepper. Arrange in single layer on large shallow foil-lined baking pan sprayed with no stick cooking spray. Bake wings 20 minutes. 
                        Remove from oven and brush with one half of the sauce. Bake 15 to 20 minutes longer or until wings are cooked through. Meanwhile, mix yogurt, blue cheese and Parsley Paste in small bowl. 
                        Brush cooked wings with remaining sauce and serve with Blue Cheese Parsley Dip.
                                    </p>
                    </div>
                    <div className="card-footer text-muted">
                        <a href="https://www.gourmetgarden.com/en-us/recipes/appetizers/baked-wings-with-blue-cheese-parsley-dip" className="card-link float-left">Source</a>
                    </div>
                </div>
            </Container>
        </>
    );
}
function Card() {
    return (
        <>
            <div className="card mb-3 card-recipe centered-card text-center">
                <h3 className="card-header">Baked Wings with Blue Cheese Parsley Dip</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">12</span></h6>
                </div>
                <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Ingredients</h5>
                    <ul classNAme="list-group">
                    <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">3 pounds</span>Chicken wing pieces</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>salt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>McCormick® Pure Ground Black Pepper</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/4 cup</span>Ketcup</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 tablespoons</span>White wine vinegar</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 tablespoons</span>Honey</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Garlic</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Chili pepper</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 cup</span>Non-fat Greek yogurt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/4 cup</span>Blue cheese crumbles</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Parsley</li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <h5 className="card-title">Preparation</h5>
                    <p className="card-text">
                        Preheat oven to 425°F. Mix ketchup, vinegar, honey, Garlic Paste and Chili Pepper Paste in small bowl. Remove half of the sauce to separate bowl for basting and reserving remaining sauce to serve. 
                        Set both aside. Season wings with salt and pepper. Arrange in single layer on large shallow foil-lined baking pan sprayed with no stick cooking spray. Bake wings 20 minutes. 
                        Remove from oven and brush with one half of the sauce. Bake 15 to 20 minutes longer or until wings are cooked through. Meanwhile, mix yogurt, blue cheese and Parsley Paste in small bowl. 
                        Brush cooked wings with remaining sauce and serve with Blue Cheese Parsley Dip.
                                    </p>
                </div>
                <div className="card-footer text-muted">
                    <a href="https://www.gourmetgarden.com/en-us/recipes/appetizers/baked-wings-with-blue-cheese-parsley-dip" className="card-link float-left">Source</a>
                    <button type="button" className="card-link float-right" data-dismiss="alert">Close</button>
                </div>
            </div>
        </>
    );
}
function Brief() {
    return (
        <>
            <div className="card mb-3 card-recipe centered-card text-center">
                <h3 className="card-header">Baked Wings with Blue Cheese Parsley Dip</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">12</span></h6>
                </div>
            </div>

        </>
    );
}


export { Page, Card, Brief };