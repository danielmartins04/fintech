import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    backgroundColor: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-2)",
    fontWeight: "600",
    textTransform: "capitalize",
};

function getMonthName(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function getFormattedDate(date: Date){
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}

type MonthBtnProps = {
    desiredMonth: number;
}

const MonthBtn = ({ desiredMonth }: MonthBtnProps) => {
    const { setInicio, setFinal } = useData();

    function setMonth(desiredMonth: number){
        const date = new Date();
        date.setMonth(date.getMonth() + desiredMonth);

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        setInicio(getFormattedDate(firstDay));
        setFinal(getFormattedDate(lastDay));
    }

    return (
        <button style={style} onClick={() => setMonth(desiredMonth)}>
            {getMonthName(desiredMonth)}
        </button>
    )
};

export default MonthBtn;
