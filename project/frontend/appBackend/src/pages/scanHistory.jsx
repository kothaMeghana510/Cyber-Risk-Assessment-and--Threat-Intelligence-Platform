import FetchScans from "../history/fetchScans"
import Heading from "../history/heading"
import NavLinks from "../navigation/navLinks"
import ScanStats from "../stats/statsOfScans"

function ScanHistory() {
    return (
        <div>
            <NavLinks />
            <div>
                <Heading />
                <ScanStats />
            </div>
            <div>
                <FetchScans />
            </div>
        </div>
    )
}

export default ScanHistory