import React, { Component } from "react";
import i18n from "./i18n";
import { withTranslation } from 'react-i18next'

class i18nTest extends Component {

    render() {
        return (
            // 버튼 클릭 시 i18n의 changeLanguage 함수를 호출하여 언어를 변경하고 key값의 값을 출력 
            <div>
                <button onClick={() => i18n.changeLanguage('en')}>American</button>
                <button onClick={() => i18n.changeLanguage('ko')}>한국어</button>
                <button onClick={() => i18n.changeLanguage('jp')}>日本</button>
                <p>{i18n.t('hello')}</p>
            </div>
        )
    }
}

export default withTranslation()(i18nTest)

