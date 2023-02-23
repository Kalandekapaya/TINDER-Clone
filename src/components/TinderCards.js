import React, { useEffect, useState, Component } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../firebase';
import './TinderCard.css'
import Sidebar from './sidebar';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        // this is where the code run ...
        const unSubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));
        return () => {
            // cleanUp
            unSubscribe()
        }
    }, [])
    //console.log(people);

    // Bad
    // const people =[];
    // people.push('sashen', 'hasindu')

    // Good
    // setPeople([...people, 'sashen', 'hasindu'])npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

    return (
        <div>
            <div className='card__container'>
                {people.map(person => (
                    <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                            <a href="#" class=" card group relative block bg-black" >
                            <img
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-sm"
                            />
                            
                            <div class="relative p-2 sm:p-6 lg:p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                Wandi
                                </p>

                                <p class="text-xl font-bold text-white sm:text-2xl">{person.name}</p>

                                <div class="mt-32 sm:mt-0.5 md:mt-0.5 lg:mt-0.5 xl:mt-0.5">
                                <div
                                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >

                                <div className="text-primary-content">
  
                                    <div className="stat">
                                        <div className="stat-title">Age</div>
                                        <div className="stat-value">24</div>
                                        <div className="stat-actions">
                                        <button className="btn btn-sm btn-success">Single</button>
                                        </div>
                                    </div>
                                    
                                    <div className="stat">
                                        <div className="stat-title">Handle</div>
                                        <div className="stat-value"> LOVER</div>
                                        <div className="stat-actions">
                                        <button className="btn btn-sm p-2"> tech </button> 
                                        <button className="btn btn-sm p-2"> hustler</button>
                                        </div>
                                    </div>
                                    
                                    </div>

                                    <p class="text-sm text-white">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                                    reiciendis nostrum harum. Repudiandae?
                                    </p>
                                    
                                </div>
                                </div>
                            </div>
                            </a>
                            
                        </TinderCard>
                    ))}

                                           
            </div>
            < Sidebar /> 
        </div>
    )
}

export default TinderCards