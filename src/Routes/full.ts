// Import other routes
import main from './sets/main'
import discord from './sets/discord'
import charmy from './sets/charmy'
import minecraft from './sets/minecraft'
import error from './sets/error'

// Export all full routes as a single array
export default [...main, ...discord, ...charmy, ...minecraft, ...error]
