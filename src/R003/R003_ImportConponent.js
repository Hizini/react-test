import React, { Component } from "react";
import './Test3.scss'

class R003_ImportConponent extends Component {
    render() {
        return (
            <>
                <div className='div'>div
                    <div className='someTag'>
                        someTag
                    </div>
                </div>

                <h2>[THIS IS IMPORTED COMPONENT ]</h2>
            </>
        )
    }
}

export default R003_ImportConponent