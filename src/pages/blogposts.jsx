import React from 'react';
import { Link } from 'react-router-dom';

const BlogPosts = [
    {
        id: '1',
        title: 'How Do I Navigate This Website?',
        tag: 'General',
        description: 'Understanding how my website and blog posts function.',
        content: (
            <div className='bg-gray-200 min-h-screen flex flex-col'>
                <p className='text-base font-medium break-words md:text-xl md:mb-10 md:mt-10 md:ml-10 lg:text-2xl lg:mt-20 lg:ml-20 xl:ml-60'>How Do I Navigate This Website?</p>
                <div className='mx-auto flex flex-col items-center p-4 l-2 sm:w-5/6 md:p-0 md:w-3/4 lg:w-1/2'>
                    <p>
                        This post serves to function more as a proof of concept for future blogs. 
                    </p>
                    <br />
                    <p>
                        Each project and blog post will be accessible through a post component that will give you a general preview of the content included.
                        You can click on each component to be brought to the content itself.
                    </p>
                    <br />
                    <div className="bg-gray-300 max-w-screen-md p-2 m-2 w-2/3 rounded-2xl group border-2 border-gray-700 hover:border-gray-500">
                        <Link to="/blog/1" className="flex">
                            <div className="break-words m-1 w-full">
                                <p className="text-2xl font-medium group-hover:text-sky-800">Title Of Post</p>
                                
                                <div className="flex flex-row items-center">
                                    <svg className="ml-2 fill-black" height="12" width="12" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M506.513,311.066L253.87,58.423c-2.024-2.026-4.486-3.559-7.195-4.483L140.15,17.593 c-6.758-2.305-14.242-0.568-19.294,4.483L84.709,58.222L31.977,5.491c-7.314-7.315-19.176-7.315-26.49,0 c-7.315,7.315-7.315,19.175,0,26.49l52.732,52.731l-36.14,36.141c-5.051,5.05-6.79,12.534-4.483,19.294L53.943,246.67 c0.924,2.71,2.458,5.172,4.483,7.197L311.071,506.51c7.314,7.315,19.175,7.315,26.49,0l168.954-168.954 C513.83,330.241,513.83,318.382,506.513,311.066z M227.241,227.238c-21.817,21.819-57.132,21.82-78.952,0 c-21.768-21.768-21.768-57.185,0.001-78.953c21.817-21.819,57.132-21.82,78.953,0C249.009,170.053,249.009,205.47,227.241,227.238 z"/>
                                    </svg>
                                    <p className="text-xs font-medium ml-1">Primary Tag</p>
                                </div>
                                <p className="text-l mt-1 mb-1 ml-1">A description of the contents of a post.</p>
                            </div>
                        </Link>
                    </div>
                    <br />
                    <div>
                        <p>
                            The <span className='font-bold'>Lorem Ipsum</span> text that we use today as placeholder text actually originates from a work by the Roman philosopher and orator <span className='text-bold'>Marcus Tullius Cicero</span>, although the modern version is a jumbled and altered form of the original. 
                            Cicero wrote a philosophical treatise titled De Finibus Bonorum et Malorum, <span className='text-xs'>ENG: On the Ends of Good and Evil</span>, in 45 BCE, in which he explored the nature of ethics and moral philosophy. 
                        </p>
                        <br />
                        <br />
                        <p className='flex flex-col'>
                            The original Latin text from Cicero's treatise read:
                            <blockquote className='border-b border-rose-900 w-1/3 mt-2 ml-6'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</blockquote>
                            <br />
                            <br />
                            Translated into English, this roughly means:
                            <blockquote className='border-b border-rose-900 w-1/3 mt-2 ml-6'>"Nor is there anyone who loves, pursues, or desires pain itself because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."</blockquote>
                        </p>

                        <br />
                        <br />

                        <p className='text-lg font-semibold'>The Transformation into "Lorem Ipsum"</p>
                        <p className='ml-8'>
                            The text we recognize as "Lorem Ipsum" is a result of the first few words of this passage being taken and jumbled over the years. 
                            In the 1500s, a printer named Aldus Manutius is credited with popularizing the use of "Lorem Ipsum" in his typesetting work, likely because the Latin text provided a non-meaningful but readable block of text that could be used to test fonts and layouts without distracting the viewer with actual content. 
                            Creating the standard "Lorem Ipsum" text we now use as filler text in design and publishing.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
];

export default BlogPosts;