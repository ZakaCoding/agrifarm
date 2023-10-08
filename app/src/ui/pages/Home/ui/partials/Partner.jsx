import CompanyLogo1 from 'assets/image/bromo-biotech.png';
import CompanyLogo2 from 'assets/image/junior-farm.png';
import CompanyLogo3 from 'assets/image/bromo-bery.png';
import CompanyLogo4 from 'assets/image/kenteto.png';
import CompanyLogo5 from 'assets/image/aagrifield.jpg';

export function Partner() {

    return (
        <section className='pt-5'>
            <h2 className="text-4xl font-bold text-center">Our Company Group</h2>

            <div className="flex item-center cursor-pointer content-center justify-center my-5 mx-auto">
                <img className='w-28 mx-3 filter grayscale hover:grayscale-0 transition-all duration-300' src={CompanyLogo1} alt="" />
                <img className='w-28 mx-3 filter grayscale hover:grayscale-0 transition-all duration-300' src={CompanyLogo2} alt="" />
                <img className='w-28 mx-3 filter grayscale hover:grayscale-0 transition-all duration-300' src={CompanyLogo5} alt="" />
                <img className='w-28 mx-3 filter grayscale hover:grayscale-0 transition-all duration-300' src={CompanyLogo3} alt="" />
                <img className='w-28 mx-3 filter grayscale hover:grayscale-0 transition-all duration-300' src={CompanyLogo4} alt="" />
            </div>
        </section>
    )

}