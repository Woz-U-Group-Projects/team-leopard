import React from 'react';
import Header from '../Header.js';
import { Container } from 'react-bootstrap';


function Page() {
    return (
        <>
            <Container>
                <div className="card mb-3 text-center">
                    <h3 className="card-header">Brunch Board</h3>
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">?</span></h6>
                    </div>
                    <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">Ingredients</h5>
                        <ul classNAme="list-group">
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Waffle Sticks</span>https://www.realcaliforniamilk.com/recipe/sour-cream-waffles</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Honey Orange Butter</span>https://www.realcaliforniamilk.com/recipe/honey-orange-butter</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Egg and California Cheese Tortilla Cups</span>https://www.realcaliforniamilk.com/recipe/egg-and-california-cheese-tortilla-cups</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Super Berry Smoothie Shots</span>https://www.realcaliforniamilk.com/recipe/super-berry-smoothie</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left"></span> Real California yogurt, breakfast cheese, cheddar, Monterey jack, pepper jack, cream cheese and herbs, assorted jams, granola, strawberries, blueberries and nectarines.</li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <h5 className="card-title">Preparation</h5>
                        <p className="card-text">
                        The brunch board is made up of various recipes and ingredients. The recipes and their links are included inside.
                        Serving size varies on the amounts prepared.
                                    </p>
                    </div>
                    <div className="card-footer text-muted">
                        <a href="https://www.realcaliforniamilk.com/recipe/brunch-board" className="card-link float-left">Source</a>
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
                <h3 className="card-header">Brunch Board</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">12</span></h6>
                </div>
                <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Ingredients</h5>
                    <ul classNAme="list-group">
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Waffle Sticks</span>https://www.realcaliforniamilk.com/recipe/sour-cream-waffles</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Honey Orange Butter</span>https://www.realcaliforniamilk.com/recipe/honey-orange-butter</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Egg and California Cheese Tortilla Cups</span>https://www.realcaliforniamilk.com/recipe/egg-and-california-cheese-tortilla-cups</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">Super Berry Smoothie Shots</span>https://www.realcaliforniamilk.com/recipe/super-berry-smoothie</li>
                        <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left"></span> Real California yogurt, breakfast cheese, cheddar, Monterey jack, pepper jack, cream cheese and herbs, assorted jams, granola, strawberries, blueberries and nectarines.</li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <h5 className="card-title">Preparation</h5>
                    <p className="card-text">
                        The brunch board is made up of various recipes and ingredients. The recipes and their links are included inside.
                        Serving size varies on the amounts prepared.
                                    </p>
                </div>
                <div className="card-footer text-muted">
                    <a href="https://www.realcaliforniamilk.com/recipe/brunch-board" className="card-link float-left">Source</a>
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
                <h3 className="card-header">Brunch Board</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">?</span></h6>
                </div>
            </div>

        </>
    );
}


export { Page, Card, Brief };