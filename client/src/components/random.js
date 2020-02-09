import React, {
    Component
} from 'react'


var linkList = ["ecologyofvidz.html", "mondayfiles.html", "oz-glob.html", "pink.html", "spincycle.html", "swerve.html"];


export class random extends Component {


    chooseElement = assets => assets[Math.floor(Math.random() * assets.length)];

    render() {
        return ( <
            div >

            <
            /div>
        )
    }
}

export default random