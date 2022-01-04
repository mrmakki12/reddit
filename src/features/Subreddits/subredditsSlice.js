import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
    
    name: 'subreddit',

    initialState: {
        
        selectedSubreddit: '',

        subreddits: [
            {
                url: '/r/Home/',
                name: 'Home',
                img: '/images/redditLogo.png'
            },
            {
                url: '/r/News/',
                name: 'News',
                img: '/images/news.png'
            },
            {
                url: '/r/technews/',
                name: 'Tech News',
                img: '/images/redditLogo.png'
            },
            {
                url: '/r/nba/',
                name: 'NBA',
                img: '/images/nba.png'
            },
            {
                url: '/r/interestingasfuck/',
                name: 'Interesting As Fuck',
                img: '/images/interestingasf.png'
            },
            {
                url: '/r/Holup/',
                name: 'Holup',
                img: '/images/holup.png'
            },
            {
                url: '/r/Unexpected/',
                name: 'Unexpected',
                img: '/images/unexpected.png'
            },
            {
                url: '/r/PublicFreakout/',
                name: 'Public Freakout',
                img: '/images/public.png'
            },
            {
                url: '/r/nextfuckinglevel/',
                name: 'Next Fucking Level',
                img: '/images/nextlevel.png'
            },
            {
                url: '/r/TooAfraidToAsk/',
                name: 'Too Afraid To Ask',
                img: '/images/tooafraid.png'
            },
            {
                url: '/r/aww/',
                name: 'Aww',
                img: '/images/aww.jpg'
            },
            {
                url: '/r/NoStupidQuestions/',
                name: 'No such thing as stupid questions',
                img: '/images/questions.png'
            },
            {
                url: '/r/HumansBeingBros/',
                name: 'Humans Being Bros',
                img: '/images/bros.png'
            },
            {
                url: '/r/AmItheAsshole/',
                name: 'Am I The Asshole',
                img: '/images/asshole.png'
            },
            {
                url: '/r/Damnthatsinteresting/',
                name: 'Damn Thats Interesting',
                img: '/images/damn.png'
            },
            {
                url: '/r/wallstreetbets/',
                name: 'wallstreetbets',
                img: '/images/wallstreet.png'
            },
            {
                url: '/r/webdev/',
                name: 'webdev: reddit for web developers',
                img: '/images/webdev.jpg'
            },
            {
                url: '/r/Libertaian/',
                name: 'Libertarian',
                img: '/images/libertarian.png'
            },
            {
                url: '/r/3Dmodeling/',
                name: '3Dmodeling',
                img: '/images/models.png'
            }, 
            {
                url: '/r/NatureIsFuckingLit/',
                name: 'Nature Is Fucking Lit',
                img: 'images/nature.png'
            },
            {
                url: '/r/sadcringe',
                name: 'Sad Cringe',
                img: 'images/sad.png'
            }
        ]

    },

    reducers: {

        setSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        },

    }
})

export default subredditSlice.reducer;

export const { setSubreddit } = subredditSlice.actions;

export const selectSelectedSubreddit = (state) => state.subreddit.selectedSubreddit;

export const selectSubreddits = (state) => state.subreddit.subreddits;