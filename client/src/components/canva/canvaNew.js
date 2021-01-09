import React, { useState, useEffect, useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPNG } from "react-component-export-image";
import ReactToPrint from 'react-to-print';

import { Ruler } from "../ruler";

import Draggable from "react-draggable";

const CanvaNew = React.forwardRef((props, ref) => {
    const [select, setSelect] = useState(true)
    const [company, setCompany] = useState(props)
    // console.log(company)
    const [number, setNumber] = useState({ props, select: false })
    const [email, setEmail] = useState(props)
    const [img, setImg] = useState('')
    const [backg, setBackg] = useState(props.backImage)




    const textSelect = () => {
        setSelect(!select)

    }
    const handleImageUpload = (e) => {
        // console.log(e.target.files[0])
        setImg(e.target.files[0])
    }

    useEffect(() => {
        setCompany(props);
    }, [props]);

    useEffect(() => {
        setNumber(props);
    }, [props]);
    useEffect(() => {
        setEmail(props);
    }, [props]);
    // const myCan = document.getElementById('can');
    // const download = document.getElementById('down');
    // const downLoads = () => {
    //     if (window.navigator.msSaveBlob) {
    //         window.navigator.msSaveBlob(myCan.msToBlob(), "canva.png")
    //     }
    // }

    const clickText = document.querySelectorAll('p');
    clickText.forEach(item => {
        item.addEventListener('click', event => {
            const color = props.selectedColor;
            console.log(color);


            event.target.style.color = color
            // console.log(color);
            console.log(event.target);

        })
    })

    const [targetNode, setTargetNode] = useState();
    const [showRuler, setShowRuler] = useState(false);

    const onDrag = (e, { x, y, node }) => {
        setShowRuler(true);
        setTargetNode({ left: x, top: y + node.offsetTop, height: node.clientHeight });
    }
    return (
        <div className="canva-board" >
            {showRuler && <Ruler node={targetNode} />}
            <input type="file" onChange={handleImageUpload}></input>

            <div ref={ref} id="can" style={{ width: '650px', backgroundColor: props.changeBack, height: '350px', border: '1px solid black', position: 'absolute', margin: '200px' }}>
                <div>
                    <h1>{props.item}</h1>
                </div>
                <div>
                    {
                        props.items && props.items.map(item => {
                            return (
                                <h2>{item.title}</h2>
                            )
                        })
                    }
                </div>

                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>


                    <div style={{ width: props.imageSize, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        {img && showRuler && (
                            <div
                                style={{
                                    height: props.imageSize + 'px',
                                    width: props.imageSize + 'px',
                                    border: '1px solid',
                                    opacity: '0.2',
                                    background: 'gray'
                                }}
                            />
                        )}
                        {img && !showRuler && (
                            <div
                                style={{
                                    height: props.imageSize + 'px',
                                    width: props.imageSize + 'px',
                                    backgroundSize: 'cover',
                                    backgroundImage: `url(${URL.createObjectURL(img)})`
                                }}
                            />
                        )}
                        {/*{img && <img src={URL.createObjectURL(img)} style={{ width: props.imageSize + 'px', userDrag: 'none'  }}></img>}*/}
                    </div>

                </Draggable>
                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 250, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        {/* <div>
                            <h1 style={{ fontSize: props.imageSize + 'px' }}>hello</h1>

                        </div> */}
                        <p style={{ fontFamily: props.changeFont, fontSize: props.changeFsize }} onClick={textSelect} >{props.company}   </p>
                    </div>
                </Draggable>


                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, fontSize: props.changeFsize }}  >{props.number}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, fontSize: props.changeFsize }} >{props.address}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, fontSize: props.changeFsize }} >{props.email}</p>
                    </div>
                </Draggable>


                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text1}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text2}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text3}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text4}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text5}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent" onDrag={onDrag} onStop={() => setShowRuler(false)}>
                    <div style={{ width: 150, position: 'relative', cursor: showRuler ? 'move' : '' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text6}</p>
                    </div>
                </Draggable>
            </div>


        </div>
    )
}
);

const MyComponent = (props) => {
    const componentRef = useRef();
    return (
        <React.Fragment>
            <CanvaNew {...props} ref={componentRef} />
            <button onClick={() => exportComponentAsJPEG(componentRef)} className="btn-download">
                Export As JPEG
            </button>

            <button onClick={() => exportComponentAsPNG(componentRef)} className="btn-download">
                Export As PNG
            </button>
        </React.Fragment>);
}







export default MyComponent;
