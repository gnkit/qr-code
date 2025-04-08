import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {

    console.log(SCAN_DATA)
    ;
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {

        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };


    return (
        <>
            <div className="container">
                <p>{scanned}</p>
                <Scanner
                    allowMultiple={false}
                    components={{
                        audio: false,
                        finder: false,
                    }}
                    styles={{
                        container: { width: 300 }
                    }}
                    onScan={scanHandler}
                />
            </div>
        </>
    )

};
