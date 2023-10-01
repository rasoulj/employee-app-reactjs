import noDataImage from "../assets/no-data.svg"
export default function NoData() {
    return <div className="flex align-middle justify-center bg-white h-screen">
        <img className="w-1/2" src={noDataImage} alt="No Employee" />
    </div>
}