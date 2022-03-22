export default function TeamEditor(props) {

    const { teamNumber } = props;

    return <>
        <div className="team-box">
            <form>
                <div>
                    <h2>Capabilities</h2>
                    <hr />
                </div>
                <p>Team {teamNumber}</p>
                <div id="upper-hub">
                    <label htmlFor="upperhub">Upper Hub</label>
                    <input type="checkbox" id="upperhub"/>
                    <button>+</button> { "5/10" } <button>-</button>
                </div>
                <div id="lower-hub">
                    <label htmlFor="lowerhub">Lower Hub</label>
                    <input type="checkbox" id="lowerhub"/>
                    <button>+</button> { "5/10" } <button>-</button>
                </div>
                <div id="hangar-levels">
                    <h3>Hangar Levels</h3>
                    <label htmlFor="one">1</label>
                    <input type="checkbox" id="one"/>
                    <label htmlFor="two">2</label>
                    <input type="checkbox" id="two"/>
                    <label htmlFor="three">3</label>
                    <input type="checkbox" id="three"/>
                    <label htmlFor="four">4</label>
                    <input type="checkbox" id="four"/>
                </div>

                {/* Right Side */}
                <label htmlFor="preload">pre-load</label>
                <input type="number" name="preload" id="preload" value={0}/>

                <label htmlFor="autopts">autonomous points</label>
                <input type="number" name="autopts" id="autopts" value={0}/>
                <br />
                <label htmlFor="notes">Misc Notes:</label>
                <textarea type="text" name="notes" id="notes" rows={10} cols={35} />
            </form>
        </div>       
    </>;
}