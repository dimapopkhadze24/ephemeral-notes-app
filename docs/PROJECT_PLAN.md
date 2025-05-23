# Ephemeral Notes App - Core Features Plan

## Overview

A peer-to-peer application for sending self-destructing messages using Holepunch for P2P communication and React for the frontend.

## Core Features (MVP)

### 1. Basic User Management

- Simple user identifier generation
- Basic contact list (just store peer IDs)

### 2. Essential Message System

- Create messages with two deletion options:
  - Time-based (5min, 15min, 1hour)
  - Read-based (delete after first read)
- Basic message status (sent, read)

### 3. P2P Communication (Holepunch)

- Direct peer-to-peer connection
- Basic message routing
- Simple connection status

## Technical Implementation

### Frontend (React)

Essential components only:

- App Container
- Contact List
- Message Composer
- Message Viewer

### State Management

- Contact list (peer IDs)
- Message state
- Connection state

### P2P Layer (Holepunch)

Core functionality:

- Peer connection using `@pear/core`
- Message routing using `@pear/messages`
- Basic encryption using `@pear/crypto`

## User Flow (Simplified)

### Initial Setup

1. User launches app
2. Gets unique peer ID
3. Ready to connect

### Adding Contacts

1. Enter peer ID
2. Connect directly

### Sending Messages

1. Select contact
2. Write message
3. Set deletion type (time/read)
4. Send

### Receiving Messages

1. Receive message
2. View content
3. Message self-destructs based on rules

## UI/UX (Minimal)

### Main Views

1. **Home**

   - Contact list
   - Quick message composer
   - Connection status

2. **Message View**
   - Message history
   - Message composer
   - Deletion countdown

## Holepunch Implementation Details

### Peer Connection

```javascript
// Using @pear/core for peer connections
const peer = new Peer();
const connection = peer.connect(remotePeerId);
```

### Message Handling

```javascript
// Using @pear/messages for message routing
const messages = new Messages(connection);
messages.on("message", handleMessage);
```

### Data Storage

- Store peer IDs locally
- Keep message history in memory
- No persistent storage needed

## Development Timeline (3-4 days)

### Day 1

- Set up React project
- Implement basic Holepunch connection
- Create simple UI structure

### Day 2

- Implement message sending/receiving
- Add basic deletion rules
- Create contact management

### Day 3

- Polish UI
- Add message status
- Test and debug

### Day 4 (if available)

- Add any remaining features
- Final testing
- Documentation

## Removed Features (for later)

- User profiles
- Avatars
- Complex deletion rules
- Message encryption
- Offline handling
- Settings panel
- Group messages
- File sharing
- Read receipts
- Typing indicators

## Next Steps

1. Set up Holepunch in React project
2. Create basic UI components
3. Implement peer connection
4. Add message system
