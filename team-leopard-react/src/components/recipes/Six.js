import React from 'react';
import Header from '../Header.js';
import { Container } from 'react-bootstrap';


function Page() {
    return (
        <>
            <Container>
                <div className="card mb-3 text-center">
                    <h3 className="card-header">California Cheddar and Bacon Waffles</h3>
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">4</span></h6>
                    </div>
                    <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">Ingredients</h5>
                        <ul classNAme="list-group">
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 cup</span>Real California milk</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 cup</span>Real California Cheddar cheese, shredded</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 </span>eggs, beaten</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">3 tablespoon</span>Real California butter, melted</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 1/2 cups</span>All-purpose flour</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Baking powder</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>Sugar</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 teaspoon</span>Salt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">8 </span>Bacon,cooked and divided</li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <h5 className="card-title">Preparation</h5>
                        <p className="card-text">
                        Preheat the waffle iron. In a large bowl, sift flour, baking powder, sugar, salt. Add in the melted California butter, eggs, milk, and combine. 
                        Once the batter is mixed, add the grated California Cheddar cheese and 6 pieces of bacon crumbled. Fold in the ingredients until they are incorporated evenly into the batter.
                        Once batter is ready and waffle iron is hot, pour enough batter to fill the cavity (amount will vary by waffle iron) and close. Cook according to your waffle iron's instructions.
                        Serve immediately topped with a little butter, additional shredded California Cheddar, bacon crumbles, and pure maple syrup. 
                                    </p>
                    </div>
                    <div className="card-footer text-muted">
                        <a href="https://www.realcaliforniamilk.com/recipe/california-cheddar-and-bacon-waffles" className="card-link float-left">Source</a>
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
                <h3 className="card-header">California Cheddar and Bacon Waffles</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">4</span></h6>
                </div>
                <img className="blank-image mx-auto" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Ingredients</h5>
                    <ul classNAme="list-group">
                    <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 cup</span>Real California milk</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 cup</span>Real California Cheddar cheese, shredded</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">2 </span>eggs, beaten</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">3 tablespoon</span>Real California butter, melted</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 1/2 cups</span>All-purpose flour</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 tablespoon</span>Baking powder</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1 teaspoon</span>Sugar</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">1/2 teaspoon</span>Salt</li>
                            <li className="list-group-item text-right"><span class="badge badge-pill badge-info float-left">8 </span>Bacon,cooked and divided</li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <h5 className="card-title">Preparation</h5>
                    <p className="card-text">
                        Preheat the waffle iron. In a large bowl, sift flour, baking powder, sugar, salt. Add in the melted California butter, eggs, milk, and combine. 
                        Once the batter is mixed, add the grated California Cheddar cheese and 6 pieces of bacon crumbled. Fold in the ingredients until they are incorporated evenly into the batter.
                        Once batter is ready and waffle iron is hot, pour enough batter to fill the cavity (amount will vary by waffle iron) and close. Cook according to your waffle iron's instructions.
                        Serve immediately topped with a little butter, additional shredded California Cheddar, bacon crumbles, and pure maple syrup. 
                                    </p>
                </div>
                <div className="card-footer text-muted">
                    <a href="https://www.realcaliforniamilk.com/recipe/california-cheddar-and-bacon-waffles" className="card-link float-left">Source</a>
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
                <h3 className="card-header">California Cheddar and Bacon Waffles</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Servings <span className="badge badge-pill badge-success">4</span></h6>
                </div>
            </div>

        </>
    );
}


export { Page, Card, Brief };