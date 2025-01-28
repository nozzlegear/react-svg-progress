import Progress from "../index";
import { createRoot } from "react-dom/client";

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
    const root = createRoot(document.getElementById("contenthost")!);
    root.render(<TestHarness />);
}());
