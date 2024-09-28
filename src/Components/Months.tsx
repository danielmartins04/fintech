import MonthBtn from './MonthBtn';

const Months = () => {
  return (
    <div className="flex">
      <MonthBtn desiredMonth={-1} />
      <MonthBtn desiredMonth={0} />
      <MonthBtn desiredMonth={2} />
    </div>
  );
};

export default Months;
