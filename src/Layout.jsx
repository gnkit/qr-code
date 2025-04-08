import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory';

export const Layout = () => {
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="/generate" element={<QrCodeGenerator />} />
				<Route path="/scan" element={<QrCodeScanner />} />
				<Route path="/generate-history" element={<GenerateHistory />} />
				<Route path="/scan-history" element={<ScanHistory />} />
			</Routes>
		</>
	);
};