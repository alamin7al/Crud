import './Filter.css'
const Filter = ({ filter, comapnyfilter, colorfilter }) => {

    return (
        <>
            <div className="text-start text-capitalize ">
                <hr />
                <p>Mobile Name Filter</p>
                <hr />

                <h6 className='p ms-1 text-muted' onClick={() => filter('all')}>all</h6>
                <h6 className='p ms-1 text-muted' onClick={() => filter('plus')}>plus</h6>
                <h6 className='p ms-1 text-muted' onClick={() => filter('xiaomi')}>xiaomi</h6>
                <h6 className='p ms-1 text-muted' onClick={() => filter('realme')}>realme</h6>
                <h6 className='p ms-1 text-muted' onClick={() => filter('iPhone')}>iPhone</h6>
                <h6 className='p ms-1 text-muted' onClick={() => filter('samsung')}>samsung</h6>
            </div>
            <div className="text-start text-capitalize">
                <hr />

                <p>Company Filter</p>
                <hr />
                <h6 className='p ms-1 text-muted' onClick={() => comapnyfilter('all')}>all</h6>
                <h6 className='p ms-1 text-muted' onClick={() => comapnyfilter('South')}>South</h6>
                <h6 className='p ms-1 text-muted' onClick={() => comapnyfilter('Apple')}>Apple</h6>
                <h6 className='p ms-1 text-muted' onClick={() => comapnyfilter('HMDled')}>HMDled</h6>
                <h6 className='p ms-1 text-muted' onClick={() => comapnyfilter('Chinese')}>Chinese</h6>
            </div>
            <div className="text-start text-capitalize">
                <hr />
                <p>Color Filter</p>
                <hr />

                <h6 className='p ms-1 text-muted' onClick={() => colorfilter('all')}>all</h6>
                <h6 className='p ms-1 text-muted' onClick={() => colorfilter('blue')}>blue</h6>
                <h6 className='p ms-1 text-muted' onClick={() => colorfilter('calery')}>calery</h6>
                <h6 className='p ms-1 text-muted' onClick={() => colorfilter('pink')}>pink</h6>
                <h6 className='p ms-1 text-muted' onClick={() => colorfilter('plum')}>plum</h6>
            </div>
        </>
    );
};

export default Filter;