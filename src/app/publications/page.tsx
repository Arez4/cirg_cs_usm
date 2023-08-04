'use client';

import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NextImage from '@/components/NextImage';

export default function Publications() {
  return (
    <main>
        <Header/>
        <div className=' py-24 min-h-screen md:min-h-screen text-black'>
          <section className='container mx-auto my-16'>
            <div>
              <h1>Journal Articles</h1>
              <NextImage
                useSkeleton
                src='/images/publications.png'
                className='max-w-3xl my-6 mx-auto'
                classNames={{image:'max-w-screen'}}
                width='1080'
                height='320'
                alt='Phantom V1 by Vector Motors'
              />
            </div>
            <div className='my-16'>
              <h1>Articles in International Conference Proceedings</h1>
              <ol className='list-decimal list-inside'>
                <li className='my-6'>[2021] [PDF] [DOI: 10.1109/TAAI54685.2021.00019]​​: C. G. Tan, S. S. Choong, and L. P. Wong, “A machine-learning-based approach for parameter control in bee colony optimization for traveling salesman problem,” in Proceedings of the 2021 International Conference on Technologies and Applications of Artificial Intelligence (TAAI 2021), IEEE, 2021, pp. 54–59.​</li>
                <li className='my-6'>[2017] [DOI: 10.1109/ICITE.2017.8056898]​​: C. Y. Kee, L. P. Wong, A. T. Khader, and F. H. Hassan, “Multi-label classification of estimated time of arrival with ensemble neural networks in bus transportation network,” in Proceedings of the 2nd IEEE International Conference on Intelligent Transportation Engineering (ICITE 2017), IEEE, 2017, pp. 150–154.​</li>
                <li className='my-6'>[2017] [DOI: 10.1007/978-3-319-69456-6_34]: H. S. Chuah, L. P. Wong, and F. H. Hassan, “Swap-based discrete firefly algorithm for traveling salesman problem,” in Proceedings of the 11th Multi-disciplinary International Workshop on Artificial Intelligence (MIWAI 2017), ser. Lecture Notes in Computer Science (LNCS), S. Phon-Amnuaisuk, S.P. Ang, and S.Y. Lee, Eds., vol. 10607, Springer, 2017, pp. 409–425.</li>
                <li className='my-6'>[2017] [PDF] [DOI: 10.1109/SMC.2017.8122629]: S. S. Choong, L. P. Wong, and C. P. Lim, “An artificial bee colony algorithm with a modified choice function for the traveling salesman problem,” in Proceedings of the 2017 IEEE International Conference on Systems, Man, and Cybernetics (SMC 2017), IEEE, 2017, pp. 357–362.</li>
                <li className='my-6'>[2015] [DOI: 10.1109/TAAI.2015.7407122]: L. P. Wong and S. S. Choong, “A bee colony optimization algorithm with frequent-closed-pattern-based pruning strategy for traveling salesman problem,” in Proceedings of the 2015 Conference on Technologies and Applications of Artificial Intelligence (TAAI 2015), IEEE, 2015, pp. 308–314.</li>
                <li className='my-6'>[2014] [DOI: 10.1109/WICT.2014.7077286]: M. H. Wun, L. P. Wong, A. T. Khader, and T. P. Tan, “A bee colony optimization with automated parameter tuning for sequential ordering problem,” in Proceedings of the 4th World Congress on Information and Communication Technologies (WICT 2014), IEEE, 2014, pp. 314–319.</li>
                <li className='my-6'>[2013] [DOI: 10.1109/ISDA.2013.6920757]: L. P. Wong, A. T. Khader, M. A. Al-Betar, and T. P. Tan, “Solving asymmetric traveling salesman problems using a generic bee colony optimization framework with insertion local search,” in Proceedings of the 13th International Conference on Intelligent Systems Design and Applications (ISDA 2013), IEEE, 2013, pp. 20–27.</li>
                <li className='my-6'>[2011] [DOI: 10.1109/BIC-TA.2011.5]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “Finding the shortest Hamiltonian circuit of selected places in Penang using a generic bee colony optimization framework,” in Proceedings of the Sixth International Conference on Bio-Inspired Computing: Theories and Applications (BIC-TA 2011), IEEE, 2011, pp. 51–57.</li>
                <li className='my-6'>[2011] [Proceedings URL: http://www.i4e2.org/iesm11/iesm11_proceedings.html]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “Solving job shop scheduling problems with a generic bee colony optimization framework,” in Proceedings of the International Conference on Industrial Engineering and Systems Management (IESM 2011), International Institute for Innovation, Industrial Engineering and Entrepreneurship, 2011, pp. 269–280.</li>
                <li className='my-6'>[2010] [DOI: 10.1109/AMS.2010.41]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “A generic bee colony optimization framework for combinatorial optimization problems,” in Proceedings of the Fourth Asia International Conference on Mathematical/Analytical Modelling & Computer Simulation, IEEE, 2010, pp. 144–151.</li>
                <li className='my-6'>[2009]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “A bee colony optimization algorithm with the fragmentation state transition rule for traveling salesman problem,” in Proceedings of the 2009 Conference on Innovative Production Machines and Systems (IPROMS 2009), 2009.</li>
                <li className='my-6'>[2009] [DOI: 10.1109/INDIN.2009.5195901]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “An efficient bee colony optimization algorithm for traveling salesman problem using frequency-based pruning,” in Proceedings of the 7th IEEE International Conference on Industrial Informatics (INDIN 2009), IEEE, 2009, pp. 775–782.</li>
                <li className='my-6'>[2008] [DOI: 10.1109/WSC.2008.4736301]: L. P. Wong, C. Y. Puan, M. Y. H. Low and C. S. Chong, “Bee colony optimization algorithm with big valley landscape exploitation for job shop scheduling problems,” in Proceedings of the 2008 Winter Simulation Conference, IEEE, 2008, pp. 2050–2058.</li>
                <li className='my-6'>[2008] [DOI: 10.1109/INDIN.2008.4618252]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “Bee colony optimization with local search for traveling salesman problem,” in Proceedings of the 6th IEEE International Conference on Industrial Informatics (INDIN 2008), IEEE, 2008, pp. 1019–1025.</li>
                <li className='my-6'>[2008] [DOI: 10.1109/AMS.2008.27]: L. P. Wong, M. Y. H. Low, and C. S. Chong, “A bee colony optimization algorithm for traveling salesman problem,” in Proceedings of the Second Asia International Conference on Modelling & Simulation, IEEE, 2008, pp. 818–823.</li>
              </ol>
            </div>
          </section>
        </div>
        <Footer/>
    </main>
    );
}
