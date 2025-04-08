import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GENERATE_DATA } from '../../constants';

export const QrCodeGenerator = () => {

    
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center text-center">
                        <div className="card py-4" style={{ width: '22rem' }}>
                            <div className="card-img-top m-auto" style={{ width: '128px', height: '128px' }}>
                                {result !== '' && (
                                    <QRCodeSVG value={result} />
                                )}
                            </div>
                            <div className="card-body">
                                <input
                                    className="mb-3"
                                    type="text"
                                    placeholder="Typing text ..."
                                    value={value}
                                    onChange={onChangeHandler}
                                />
                                <button
                                    className="btn btn-primary"
                                    type='button'
                                    onClick={onClickHandler}
                                >
                                    Generate QR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};