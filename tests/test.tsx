import Progress from "../";
import * as React from "react";
import { render } from "react-dom";

function TestHarness(props) {
    return (
        <div>
            <div>
                {`40px:`}
                <Progress size={40} />
            </div>
            <div>
                {`Green:`}
                <Progress size={40} color={"green"} />
            </div>
            <div>
                {`In Button:`}
                <button className={`btn blue`} >
                    <Progress size={15} margin={"0 5px 0 0"} color={`#ffffff`} />
                    {`Button Text`}
                </button>
            </div>
        </div>
    )
}

(function () {
    render(<TestHarness />, document.getElementById("contenthost"));
}());