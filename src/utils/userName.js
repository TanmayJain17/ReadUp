const ADJECTIVES = [
    'marvelous',
    'precious',
    'belligerent',
    'guttural',
    'ethereal',
    'therapeutic',
    'warm',
    'pure'
]
const OBJECTS = [
    'chipmunk',
    'puppy',
    'frog',
    'cheetah',
    'wolf',
    'wildcat',
    'seal',
    'alligator'
]

function generateUserName (){

    return `${ADJECTIVES[Math.floor(Math.random()*ADJECTIVES.length)]}-${OBJECTS[Math.floor(Math.random()*OBJECTS.length)]}`
}

/*async function test(){
    const username = await generateUserName()
    console.log(username)
}
test()*/

module.exports = {
    generateUserName
}