# Amne Challenge

Instructions:

 * User can choose the input file and see the result in console or by downloading

Description :
 * First I parse the input file and read values of N and K (window size).
 * Then I run processWindow() on each window by iterating the input
 * The processWindow() iterates over window elements and calculates increasing and decreasing sequences and computes
 possible number of subranges for each sequence using calculateSubRangeCount().
 * when ever there is an increasing sequence I add its subrange count to total and when there is a decreasing sequence I subtract.

 * There is a simple index.html to let user use a GUI to upload the input and download the results.