class VisibilityToggle extends React.Component {
    state = {
        visible: false
    };
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        // this.state = {
        //     visible: false
        // };
    }
    toggleDetails() {
        this.setState(() => {
            return {
                visible: !this.state.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.toggleDetails}>
                    {this.state.visible ? "Hide details" : "Show details"}
                </button>

                {this.state.visible && <p>These are the details ...</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visible = false;

// const toggleDetails = () => {
//     visible = !visible;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <p>
//                 <button onClick={toggleDetails}>
//                     {visible ? "Hide details" : "Show details"}
//                 </button>
//             </p>
//             {visible && <p>These are the details ...</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// };

// render();
