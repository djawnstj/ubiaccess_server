
/*
 * Configuration for socket.io handler
 * 
 * @author MIke
 */
 
var thisModule = [
    {id:'0', file:'chat', method:'login', event:'login'},
	{id:'1', file:'chat', method:'message', event:'message'}
];


thisModule.baseDir = 'socketio';



module.exports = thisModule;

