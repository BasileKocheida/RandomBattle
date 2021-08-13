import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';
 


const mapStateToProps = (state) => {
  return { monster: state.monster }
};

const MonsterConnect = ({ monster }) => {

  function checkWin() {
    if (monster.pv <= 0) {
      if (window.confirm("le boss est mort Veux tu rejouer ?")) {
        
        document.location.reload()
      }
    }
  }
  return(
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="row">
                  <div className="col-sm-2 offset-sm-3">
                    <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                    <img className="img-fluid" src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                  </div>

                  <div id="comboOnMonster" className="col-sm-6">

                  </div>
                </div>
              </div>
                <h5 className="card-title">{ monster.name }</h5>
                <ProgressBar pv={ monster.pv } pvMax={ monster.pvMax } bgType='bg-danger' faType='fa-heart' barName=' : pv' />
          
            </div>
          </div>
        </div>
      </div>
      {
        checkWin()
      }
    </section >
  )}


const Monster = connect(mapStateToProps)(MonsterConnect);



export default Monster;