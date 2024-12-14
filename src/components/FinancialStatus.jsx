
function FinancialStatus (props){

    return(
        <div className="financial-card">
            <div>
              <p className="amount-header">{props.title}</p>
              <p className="amount">&#8377;{props.budget}</p>
            </div>
            <div className="financial-icon">
              <img src={props.icon} />
            </div>
        </div>
)
}
export default FinancialStatus