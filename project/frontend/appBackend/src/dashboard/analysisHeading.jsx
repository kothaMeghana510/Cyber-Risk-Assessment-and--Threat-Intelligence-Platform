import { useContext } from "react";
import { HiChartBar } from "react-icons/hi";
import { ScanContext } from "../contexts/scanContext";

function AnalysisHeading() {
    const { scanData } = useContext(ScanContext);
        if(!scanData) {
            return
        }
    return (
        <div className="flex gap-2 justify-center items-center mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center"><HiChartBar /></h2>
            <h2 className="text-2xl font-bold mb-4 text-center">Analysis</h2>
        </div>
    )
}

export default AnalysisHeading