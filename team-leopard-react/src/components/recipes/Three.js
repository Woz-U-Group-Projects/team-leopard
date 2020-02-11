import React from 'react';
import Header from '../Header.js';
import { Container } from 'react-bootstrap';


function Page() {
    return (
        <>
            <Container>
                <div className="card mb-3 text-center">
                    <h3 className="card-header">Baked Zucchini Fries with Roasted Garlic Aioli</h3>
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">8</span></h6>
                    </div>
                    <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">Ingredients</h5>
                        <ul classNAme="list-group">
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 cup</span>Mayonnaise</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 tablespoon</span>Gourmet Garden Roasted Garlic, Stir-in Paste</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 teaspoon</span>Gourmet Garden Garlic, Stir-in Paste</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 pound</span>Zucchini, ends trimmed</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 cup</span>Flour</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">4</span>Eggs, lightly beaten</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">6 teaspoon</span>Gourmet Garden Lightly Dried Italian Herbs, divided</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 cups</span>Panko bread crumbs</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 cup</span>Parmesan cheese, grated</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>salt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 teaspoon</span>Black pepper</li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <h5 className="card-title">Preparation</h5>
                        <p className="card-text">
                        Preheat oven to 425°F. Spray large shallow baking pan with no stick cooking spray or line with parchment paper. Set aside. 
                        For the Roasted Garlic Aioli, mix mayonnaise and 2 teaspoons of the Roasted Gourmet Garden Garlic Stir-In Paste and the Gourmet Garden Garlic Stir-In paste in small bowl. Set aside. 
                        For the Zucchini Fries cut each zucchini in half lengthwise and then cut each half crosswise. Cut each piece into 1/2-inch thick strips. 
                        Place flour in large shallow dish. Mix eggs, 3 teaspoons of the Gourmet Garden Lightly Dried Italian Herbs and 2 tablespoons of the Roasted Gourmet Garden Garlic Stir-In Paste in a separate large shallow dish. 
                        Mix panko, Parmesan cheese, remaining 3 teaspoons Gourmet Garden Lightly Dried Italian Herbs, salt and pepper in a third shallow dish. Reserve 1 cup of the panko mixture and set aside.
                        Roll zucchini in flour to coat. Dip in egg mixture, shaking off excess. Transfer zucchini to panko mixture and roll to coat evenly. As panko mixture in dish gets low, add some of the reserved panko mixture to dish and continue to coat zucchini. 
                        Arrange zucchini in single layer on prepared baking pan.Bake 20 minutes or until golden brown and crispy, turning halfway through cooking. Serve with Roasted Garlic Aioli.
                                    </p>
                    </div>
                    <div className="card-footer text-muted">
                        <a href="https://www.gourmetgarden.com/en-us/recipes/appetizers/baked-zucchini-fries-with-roasted-garlic-aiol" className="card-link float-left">Source</a>
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
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">8</span></h6>
                </div>
                <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Ingredients</h5>
                    <ul classNAme="list-group">
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 cup</span>Mayonnaise</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 tablespoon</span>Gourmet Garden Roasted Garlic, Stir-in Paste</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 teaspoon</span>Gourmet Garden Garlic, Stir-in Paste</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 pound</span>Zucchini, ends trimmed</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 cup</span>Flour</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">4</span>Eggs, lightly beaten</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">6 teaspoon</span>Gourmet Garden Lightly Dried Italian Herbs, divided</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 cups</span>Panko bread crumbs</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 cup</span>Parmesan cheese, grated</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>salt</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 teaspoon</span>Black pepper</li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <h5 className="card-title">Preparation</h5>
                    <p className="card-text">
                        Preheat oven to 425°F. Spray large shallow baking pan with no stick cooking spray or line with parchment paper. Set aside. 
                        For the Roasted Garlic Aioli, mix mayonnaise and 2 teaspoons of the Roasted Gourmet Garden Garlic Stir-In Paste and the Gourmet Garden Garlic Stir-In paste in small bowl. Set aside. 
                        For the Zucchini Fries cut each zucchini in half lengthwise and then cut each half crosswise. Cut each piece into 1/2-inch thick strips. 
                        Place flour in large shallow dish. Mix eggs, 3 teaspoons of the Gourmet Garden Lightly Dried Italian Herbs and 2 tablespoons of the Roasted Gourmet Garden Garlic Stir-In Paste in a separate large shallow dish. 
                        Mix panko, Parmesan cheese, remaining 3 teaspoons Gourmet Garden Lightly Dried Italian Herbs, salt and pepper in a third shallow dish. Reserve 1 cup of the panko mixture and set aside.
                        Roll zucchini in flour to coat. Dip in egg mixture, shaking off excess. Transfer zucchini to panko mixture and roll to coat evenly. As panko mixture in dish gets low, add some of the reserved panko mixture to dish and continue to coat zucchini. 
                        Arrange zucchini in single layer on prepared baking pan.Bake 20 minutes or until golden brown and crispy, turning halfway through cooking. Serve with Roasted Garlic Aioli.
                                    </p>
                </div>
                <div className="card-footer text-muted">
                    <a href="https://www.gourmetgarden.com/en-us/recipes/appetizers/baked-zucchini-fries-with-roasted-garlic-aiol" className="card-link float-left">Source</a>
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
                <h3 className="card-header">Baked Zucchini Fries with Roasted Garlic Aioli</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">8</span></h6>
                </div>
            </div>

        </>
    );
}


export { Page, Card, Brief };