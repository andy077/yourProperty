
window.onload = () =>{

    const filterBtnn = document.getElementsByClassName('filter_btns');
    const filterItemCol = document.getElementsByClassName('filter_item_col');
    const rotateArrow = document.getElementsByClassName("rotate_Arrow");

    for(let i=0; i<filterBtnn.length;i++)
    {
        filterBtnn[i].onclick = () => {
            if(filterItemCol[i].style.display=='block')
            {
                filterItemCol[i].style.display='none';
                rotateArrow[i].style.transform='rotate(0deg)';
            }
            else{
                filterItemCol[i].style.display='block';
                for(let j=0; j<filterItemCol.length; j++){
                    filterItemCol[j].style.display = j === i ? 'block' : 'none';
                }
                for(let k=0; k<rotateArrow.length; k++){
                    rotateArrow[k].style.transform = k === i ? 'rotate(180deg)' : 'rotate(0deg)';
                }
                
                
            }
        }
    }
}