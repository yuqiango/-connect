import React, { Component } from 'react';
import download from './download';
import connect from './store/connect';

const App = ({ num, dispatch, datasource }) => {
    const handleUpload = async () => { // 按需加载
        const { default: upload } = await import('./upload');
        upload();
    };
    const handleAdd = () => {
        dispatch({
            type: 'counter/ADD_NUM',
        });
    };
    const handleCut = () => {
        dispatch({
            type: 'counter/CUT_NUM',
        });
    };
    console.log('渲染');
    return(
        <div>
            <div>
                <p>自定义connect</p>
                <p>{num}</p>
                <p><input type="button" value="增加" onClick={handleAdd} /></p>
                <p><input type="button" value="减少" onClick={handleCut} /></p>
            </div>
            <div>
                <p>列表渲染</p>
                <div>
                    {
                        datasource.map(item => <li key={item.id}>{item.value}</li>)
                    }
                </div>
            </div>
            <div>
                <p>按需加载js</p>
                <input type="button" value="上传" onClick={handleUpload} />
                <input type="button" value="下载" onClick={download} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { num: state.counter.num, datasource: state.table.datasource }
}
export default connect(mapStateToProps)(App);