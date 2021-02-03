const toggleAdvance = () => {
    const showAdvance = document.getElementById('advance_data');
    
    if(showAdvance.style.display=='none')
    {
        showAdvance.style.display='block';
    }
    else if(showAdvance.style.display=='block')
    {
        showAdvance.style.display='none';
    }
    else{
        showAdvance.style.display='none';
    }
}

export default toggleAdvance;