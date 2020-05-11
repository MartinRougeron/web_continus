import React from 'react';
import {NavLink} from 'react-router-dom';

const Rpg = () => {
    window.scrollTo(0, 0)
    return (
        <div className="Project">
            <div className="title_project">
                <h1>My_rpg</h1>
                <div className="Project_text">
                    <img
                        id="Tetris_Project"
                        className="Project_Illustration"
                        alt=""
                        src="./Illustration/rpg.png"></img>
                </div>
            </div>
            <div className="Project_presentation">
                <p>
                    <br/>My_rpg is a creative project, indeed, the goal is to create a true, RPG game.<br/><br/>
                    With 3 other people, we create "Ghost of Lies". It happens in a medieval/fantasy
                    world<br/><br/>
                    This game has a large map:<br/><br/>
                </p>
                <img className="Rpg_illustration" src="./Illustration/Rpg/minimap.png" alt=""></img>
                <p>It also has a dual combat system with a magic system & a melee system.<br/>
                </p>
                <img
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/attack_melee.png"
                    alt=""></img>
                <img className="Rpg_illustration" src="./Illustration/Rpg/fireball.png" alt=""></img>
                <p>The main menu allows you to load your game or customize your character if
                    you're new.<br/><br/></p>
                <img className="Rpg_illustration" src="./Illustration/Rpg/menu.png  " alt=""></img>
                <p>Also, Ghost of Lies has an inventory & a skill tree to improve your abilities.<br/><br/></p>
                <img
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/Inventroy.png  "
                    alt=""></img>
                <img
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/skill tree.png  "
                    alt=""></img>
                <p>The story is told through main quests. A quest have always 3 parts:<br/><br/></p>
                <p style={{
                    marginLeft: 50
                }}>Talk to pnj to get the quest to get it<br/><br/><br/><br/>
                </p>
                <img
                    style={{
                    marginLeft: 175
                }}
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/Talk to pnjs.png"
                    alt=""></img>
                <img
                    style={{
                    marginLeft: 175
                }}
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/quest.png"
                    alt=""></img>
                <p style={{
                    marginLeft: 50
                }}>Do the quest<br/><br/><br/><br/>
                </p>
                <img
                    style={{
                    marginLeft: 175
                }}
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/takedamage.png"
                    alt=""></img>
                <p style={{
                    marginLeft: 50
                }}>Receive the quest's item or skill<br/><br/><br/><br/>
                    <img
                        style={{
                        marginLeft: 175
                    }}
                        className="Rpg_illustration"
                        src="./Illustration/Rpg/reward.png"
                        alt=""></img>
                </p>
                <p>To have a game with life we add 4 types of PNJs<br/><br/></p>
                <p style={{
                    marginLeft: 50
                }}>Quest PNJ<br/><br/><br/><br/>
                </p>
                <img
                    style={{
                    marginLeft: 175
                }}
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/Talk to pnjs.png"
                    alt=""></img>
                <p style={{
                    marginLeft: 50
                }}>Shop PNJ<br/><br/><br/><br/>
                    <img
                        style={{
                        marginLeft: 175
                    }}
                        className="Rpg_illustration"
                        src="./Illustration/Rpg/shop.png"
                        alt=""></img>
                </p>
                <p style={{
                    marginLeft: 50
                }}>Save pnj<br/><br/><br/><br/>
                </p>
                <img
                    style={{
                    marginLeft: 175
                }}
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/save.png"
                    alt=""></img>
                <p style={{
                    marginLeft: 50
                }}>Useless PNJ, his role is just to speak<br/><br/><br/><br/>
                </p>
                <img
                    style={{
                    marginLeft: 175
                }}
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/useless.png"
                    alt=""></img>
                <p>The game has 2 main parts which are the 2 bosses</p>
                <p>Triviatant which is a bullet hell boss</p>
                <img
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/TRiviatant.png  "
                    alt=""></img>
                <p>Sahrotarh which is a new type of boss</p>
                <img className="Rpg_illustration" src="./Illustration/Rpg/Boss2.png  " alt=""></img>
                <p>We also add a weather system</p>
                <img
                    className="Rpg_illustration"
                    src="./Illustration/Rpg/wheather.png  "
                    alt=""></img>
                <p className="WhiteSpace">.</p>
                <img className="NextProject" alt="" src="./Illustration/42sh.png"></img>
                <NavLink to="/42sh" className="NextProject_text">42sh</NavLink>
                <p className="WhiteSpace">.<br/>.<br/>.<br/>.<br/>.<br/></p>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    );
}

export default Rpg;