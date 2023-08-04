import React from "react";
import NextImage from "./NextImage";

type ProfileProps = React.ComponentPropsWithoutRef<'div'>;

export default function Profile({ className, ...rest }: ProfileProps) {
    return (
        <>
            <div className={className}>
              <NextImage
                useSkeleton
                src='/images/profile_picture.png'
                className='max-w-[240px] my-6 mx-auto'
                classNames={{image:'max-w-screen'}}
                width='1080'
                height='320'
                alt='Profile Picture'
              />
              <div className='w-full'>
                  <h2 className='text-center my-4'>Assoc. Prof. Dr. Li-Pei Wong</h2>
                  <p className='my-4'>A senior lecturer in the School of Computer Sciences, Universiti Sains Malaysia, Penang, Malaysia since 2012.</p>
                  <div className='my-4'>
                    <p>Education:</p>
                    <ul className='list-disc list-inside'>
                      <li>Doctor of Philosophy (PhD), Nanyang Technological University, Singapore - 2012.</li>
                      <li>Master of Science (Computer Science), Universiti Sains Malaysia - 2004.</li>
                      <li>Bachelor of Computer Science (Hons), Universiti Sains Malaysia - 2001.</li>
                    </ul>
                  </div>
                  <p>Research Interest: Single-objective & multi-objective optimization, nature inspired metaheuristics, hyper-heuristics, soft computing, manufacturing & transportation scheduling.</p>
                  <p className='my-4'>Email: ​lpwong@usm.my</p>
              </div>
            </div>
        </>
    )
};