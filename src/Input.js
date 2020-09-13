import React from 'react';

const App = () => {

    const copyCode = () => {
        //TODO
    }

    const data = "www.test.com";

    const srcCode = `<script src=${data}></script>`;
    

    return (
        <>
        <div>
          {srcCode}
        </div>
        <button onClick={copyCode}>
            Copy
        </button>
        </>
    );
}

export default App;