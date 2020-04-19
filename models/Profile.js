const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for a musician
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  title: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  primary_genres: {
    type: [String],
    required: true,
  },
  secondary_genres: {
    type: [String],
  },
  instruments: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  sound_cloud: {
    type: String,
  },
  status: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],

  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
      },
      fieldOfStudy: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
